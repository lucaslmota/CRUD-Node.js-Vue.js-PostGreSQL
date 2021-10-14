<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Editar Funcionários</h3>
      </div>

      <div class="card-body">
        <form v-on:submit.prevent="updateFormeEmployee()">
          <!--INÍCIO DO BLOCO: Employee Name-->
          <div class="form-goup mb-3">
            <label class="font-weight-bold"> Nome do funcionário</label>
            <input
              type="text"
              id="name"
              name="name"
              class="form-control"
              v-model="employeeForm.name"
            />
          </div>
          <!--FIM DO BLOCO: Employee Name-->

          <!--INÍCIO DO BLOCO: Job Role-->
          <div class="form-group mb-3">
            <label class="font-weight-bold">Cargo do funcionário</label>
            <input
              type="text"
              id="job_role"
              name="job_role"
              class="form-control"
              v-model="employeeForm.job_role"
            />
          </div>
          <!--FIM DO BLOCO: Job Role-->

          <!--INÍCIO DO BLOCO: Salary-->
          <div class="form-group mb-3">
            <label class="font-weight-bold">Salário</label>
            <input
              type="number"
              id="salary"
              name="salary"
              class="form-control"
              v-model="employeeForm.salary"
            />
          </div>
          <!--FIM DO BLOCO:Salary-->

          <!--INÍCIO DO BLOCO: Birth-->
          <div class="form-group mb-3">
            <label class="font-weight-bold">Nascimento</label>
            <input
              type="date"
              id="birth"
              name="birth"
              class="form-control"
              v-model="employeeForm.birth"
            />
          </div>
          <!--FIM DO BLOCO: Birth-->

          <!--INÍCIO DO BLOCO: Employee Registration-->
          <div class="form-group mb-3">
            <label class="font-weight-bold">Registro de funcionário</label>
            <input
              type="text"
              id="employee_registration"
              name="employee_registration"
              class="form-control"
              v-model="employeeForm.employee_registration"
            />
          </div>
          <!--FIM DO BLOCO: Employee Registration-->

          <div class="form-group">
            <button type="submit" class="btn btn-primary">
              <i class="fas fa-user-edit"></i>Update
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import EmployeeService from "../../services/EmployeeService";
export default {
  name: "EditEmployeeComponent",
  data() {
    return {
      employeeForm: {},
    };
  },
  mounted() {
    this.getEmployeeById();
  },
  methods: {
    async getEmployeeById() {
      const { id } = this.$route.params;
      const response = await EmployeeService.getEmployeesId(id);
      this.employeeForm = { ...response };
    },

    async updateFormeEmployee() {
      await EmployeeService.updateEmployeeId(this.employeeForm);
      this.$swal({
        title: "Funcionário atualizado com sucesso!",
        icon: "success",
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false,
      }).then((data) => {
        this.$router.push({
          name: "list",
        });
      });
    },
  },
};
</script>

<style>
</style>