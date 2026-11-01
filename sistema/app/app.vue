<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<style>
body {
  font-family: sans-serif;
  margin: 0;
  color: #1a1a1a;
}
header,
main {
  max-width: 52rem;
  margin: 0 auto;
  padding: 1rem;
}
nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
}
label,
fieldset {
  display: block;
  margin: 0.75rem 0;
}
input,
select,
button {
  margin-top: 0.25rem;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}
th,
td {
  border: 1px solid #ccc;
  padding: 0.35rem 0.5rem;
  text-align: left;
}
[role='alert'] {
  color: #8a1f11;
}
</style>
