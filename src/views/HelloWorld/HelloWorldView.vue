
import type ExampleComponent from '@/components/Example';

<template>
  <div class="hello-world">
    <h1>{{ message }}</h1>
    <div>
      <ExampleComponent></ExampleComponent>
    </div>
  </div>
</template>

<script lang="ts" src="./HelloWorldView.ts"></script>
<style lang="scss" src="./HelloWorldView.scss" scoped></style>