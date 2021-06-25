<template>
  <div>
    <form class="form-signin" @submit.prevent="signin()">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required
        autofocus
        v-model="user.username"
      />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required
        v-model="user.password"
      />
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        Sign in
      </button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
export default {

  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signin(){
      const api = `${process.env.API_PATH}/admin/signin`;
      const vm = this;
      this.$http.post(api, vm.user).then(response => {
        const token = response.data.token;
        const expired = response.data.expired;
        console.log(token,expired);
        document.cookie = `hexToken=${token}; expires=${new Date(expired)};`;
      
        // console.log(response.data);
        // if (response.data.success) {
        //   vm.$router.push('/');
        // }

      });
    }
  }
};
</script>
