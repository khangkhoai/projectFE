<template>
  <CCardBody >
    <CButton color="info">
      <nuxt-link :to="`/roles/Create`">Add</nuxt-link>
    </CButton>
    <CDataTable :items="listRoles"
      :fields="fields"
      items-per-page-select
      :items-per-page="5"
      hover
      sorter
      pagination>
      <template #show_details="{item}">
        <td class="py-2">
          <CButton size="sm-6" color="danger" @click="deleteRole(item.id)">
                Delete
          </CButton>
        </td>
      </template> 
    </CDataTable>
  </CCardBody>
</template>

<script>

import axios from 'axios'
export default {
  name: 'ListRole',
  data () {
    return {
      
      fields,
      details: [],
      collapseDuration: 0,
      page : {},
      currentPage : 1
    }
  },
  methods: {
   
    
  },
   
}
</script>

<style>
</style>