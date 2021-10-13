<template>
  <div>
    <h3 class="text-center">Listar funcionário</h3>
    <table class="table table-striped mt-3">
      <thead>
        <tr>
          <th class="text-center">Nome do funcionário</th>
          <th class="text-center">Cargo</th>
          <th class="text-center">Salário</th>
          <th class="text-center">Nascimento</th>
          <th class="text-center">Registro do funcionário</th>
          <th class="text-center">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee.employee_id">
          <td>{{ employee.name }}</td>
          <td>{{ employee.job_role }}</td>
          <td>{{ employee.salary }}</td>
          <td>{{ employee.birth }}</td>
          <td>{{ employee.employee_registration }}</td>
          <td>
            <router-link
              :to="{ name: 'update', params: { id: employee.employee_id } }"
              class="btn btn-success"
            >
              <i class="fas fa-pen-square"></i> Editar</router-link
            >
          </td>
          <td>
            <button
              @click="removeEmployee(employee.employee_id)"
              class="btn btn-danger"
            >
              <i class="fas fa-trash-alt"></i> Deletar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import EmployeeService from "../../services/EmployeeService";
export default {
  name: "ListEmployeeComponent",
  data() {
    return {
      employees: [],
    };
  },

  mounted() {
    this.listAllEmployees();
  },

  methods: {
    async listAllEmployees() {
      const response = await EmployeeService.getEmployees();
      this.employees = response;
    },

    async removeEmployee(id) {
      this.$swal({
        title: "Você tem certeza que deseja deletar esse funcionário?",
        text: "Atenção! este funcionário será excluído",
        icon: "warning",
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false,
        showCancelButton: true,
        confirmButonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim! Por favor, apague-o",
      }).then(async (result) => {
        if (result.value) {
          await EmployeeService.deleteEmployee(id);
          this.$swal("Delete", "Successfully delete", "success");
          this.listAllEmployees();
        } else {
          this.$swal("Cancelled", "Cancel deletion", "info");
        }
      });
    },
  },
};
</script>

<style>
</style>