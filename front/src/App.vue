<template>
  <div id="app">
    <!-- Inicio Nav Bar -->
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand order-md-last"> CRUD Vue.JS + PostgreSQL + Node.JS</a>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Criar novo funcionário</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/list-employees">Listar todos os funcionários</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- Fim nav Bar -->
    <div class="container mt-5">
      <router-view />
    </div>
  </div>
</template>

<style>
</style>
