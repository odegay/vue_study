
var app = new Vue({
  el: '#app',
  data: function () {
    return {
      // Show flag
      show: true,
      //Text for button
      changeTableVisibilityBtnName: "Hide list",
      //Button tooltip
      btnTooltip: "Press to hide/unhide users list",     
      // Cols list
      usersListTableColumns: ['Name', 'Surname', 'Patronymic name', 'Avatar'],
      // Users list
      usersList: [
        {
          name: 'User1 Name',
          surname: 'Ivanoff',
          patronymicName: 'pn1',
          img: 'https://cdn1.iconfinder.com/data/icons/freeline/32/account_friend_human_man_member_person_profile_user_users-256.png'
        },
        {
          name: 'Mike2',
          surname: 'Ivanoff2',
          patronymicName: 'pn2',
          img: 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png'
        },
        {
          name: 'Третий пользователь',
          surname: 'Ivanoff2',
          patronymicName: 'pn2'
        },
        {
          name: 'Четвёртый пользователь',
          surname: 'Ivanoff2',
          patronymicName: 'pn2',
          img: 'https://maxcdn.icons8.com/Share/icon/Users//user1600.png'
        }
      ]
    };
  },

  computed: {
    // Calculate and return users count
    usersCount: function () {
      return this.usersList.length;
    }
  },

  methods: {
    // Change visibility and <button> text after clicking on it
    changeTableVisibility: function (event) {      
      this.show = !this.show;
      if (this.show) {
        this.changeTableVisibilityBtnName = 'Hide List'
      }
      else {
        this.changeTableVisibilityBtnName = 'Show List'
      }
    }
  },
  filters: {
    // Converts argument.toString to upperCase
    capitalize: function (value) {
      return value.toString().toUpperCase();
    }
  }
});