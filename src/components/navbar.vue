<template lang="pug">
b-navbar
  template(#brand)
    b-navbar-item(tag="router-link" :to="{ path: '/' }")
      img(src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png" alt="Lightweight UI components for Vue.js based on Bulma")
  template(#start)
    b-navbar-item(tag="router-link" :to="{ path: '/publish' }") Publish 
    b-navbar-item(tag="router-link" :to="{ path: '/works' }") Browse 
    b-navbar-item(tag="a" @click.native.stop="popupAlert") Market 
  template(#end)
    b-navbar-item(tag="div")
      .buttons
        template(v-if="!isLogin")
          a.button.is-primary(@click="openWalletModal")
            strong Metamask Login
          a.button.is-primary
            strong Sign up
          a.button.is-light  Log in
        template(v-else)
          b-navbar-dropdown(:label="username")
            b-navbar-item(tag="router-link" :to="{ path: '/my/assets' }")  My Assets 
</template>

<script>
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Torus from '@toruslabs/torus-embed';

export default {
  name: 'TheNavbar',

  props: {
    msg: String,
  },

  data() {
    return {
      isLogin: false,
      address: null,
    };
  },

  computed: {
    username() {
      return `${this.address.substr(0, 2)}...${this.address.substr(-4)}`;
    },
  },

  methods: {
    async openWalletModal() {
      const providerOptions = {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            infuraId: '196440d5d02d41dfa2a8ee5bfd2e96bd',
          },
        },
        torus: {
          package: Torus,
        },
      };

      const web3Modal = new Web3Modal({
        network: 'mainnet', // optional
        cacheProvider: true, // optional
        providerOptions, // required
      });

      web3Modal.clearCachedProvider();
      const externalProvider = await web3Modal.connect();
      const ethersProvider = new ethers.providers.Web3Provider(
        externalProvider
      );
      const signer = ethersProvider.getSigner();
      const address = await signer.getAddress();
      console.log(address);

      this.isLogin = true;
      this.address = address;
    },

    popupAlert() {
      alert('Market is comming soon!');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
