<template>
  <section>
    <h1 class>{{user.name}}</h1>

    <hr />

    <h3>
      <span class="text-primary">Nickname:</span>
      {{user.username}}
    </h3>
    <h3>
      <span class="text-primary">Email:</span>
      {{user.email}}
    </h3>
    <h3>
      <span class="text-primary">Adress:</span>
      {{user.address.street}}, {{user.address.suite}}, {{user.address.city}}
    </h3>
    <h3>
      <span class="text-primary">Phone:</span>
      {{user.phone}}
    </h3>
    <h3>
      <span class="text-primary">Website:</span>
      {{user.website}}
    </h3>
  </section>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  async asyncData({ $axios, params }) {
    const user = await $axios.$get(
      "https://jsonplaceholder.typicode.com/users/" + params.id
    );
    return { user };
  }
};
</script>

