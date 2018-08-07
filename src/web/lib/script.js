
'use strict'
// import { copy } from 'web/lib/v-copy.js';

var usersListComponent = {
  name: 'users-list-component',
  template: '#users-component',
  // Arguments
  props: {
    // waiting fot a users list array
    list: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {
      //Copy buttons tooltip
      btnCopyFullNameToolTip: "Press to copy a full name to the clipboard",
      // Cols list
      usersListTableColumns: ['Name', 'Surname', 'Patronymic name', 'Avatar']
    };
  },
  // Methods  
  methods: {
    copyFullName: function () {
      // nothing is still here
    }
  },
  // Filters  
  filters: {
    // Converts argument.toString to upperCase
    capitalize: function (value) {
      if (value) 
        return value.toString().toUpperCase();
    }
  },

  mounted () {
    console.log('Примонтировался компонент UsersList')
  }
};

var app = new Vue({
  el: '#app',
  components: {
    'users-list': usersListComponent
  },
  data: function () {
    return {
      // Show flag
      show: false,
      //Button tooltip
      btnTooltip: "Press to hide/unhide users list",  
      // Users list
      usersList: [{name: "debug", surname: "deguov", patronymicName: "debugovich"}]
    };
  },

  computed: {
    // Calculate and return users count
    usersCount: function () {
      return this.usersList.length;
    },
    // Computed field for text in Change Table visibility button
    changeTableVisibilityBtnTxt: function () {
      return this.show ? 'Hide List' : 'Show List';      
    }
  },

  methods: {
    // Change visibility and <button> text after clicking on it
    changeTableVisibility: function () {      
      this.show = !this.show;      
    },
    fillUsers () {
      this.usersList = [
        {
          name: 'User1 Name',
          surname: 'Ivanoff1',
          patronymicName: 'pn1',
          img: 'https://cdn1.iconfinder.com/data/icons/freeline/32/account_friend_human_man_member_person_profile_user_users-256.png'
        },
        {
          name: 'User Name',
          surname: 'Ivanoff2',
          patronymicName: 'pn2',
          img: 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png'
        },
        {
          name: 'User3 Name',
          surname: 'Ivanoff3',
          patronymicName: 'pn3'
        },
        {
          name: 'User4 Name',
          surname: 'Ivanoff4',
          patronymicName: 'pn4',
          img: 'https://maxcdn.icons8.com/Share/icon/Users//user1600.png'
        }
      ]
    }
  },
    // track changes in UsersList
  watch: {
    usersList: function (newVal, oldVal) {
      console.log('UsersList has been changed: oldVal %s, newVal %s', newVal, oldVal);
    }
  }  
  // directives: {
  //   copy    
  // }
});

