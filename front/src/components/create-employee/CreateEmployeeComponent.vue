<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Adicionar Funcionário</h3>
      </div>

      <div class="card-body">
        <form v-on:submit.prevent="handleSubmitForm()">
          <!-- INÍCIO DO BLOCO: EMPLOYEE NAME -->
          <div class="form-group mb-3">
            <label class="font-weigth-bold">Nome do funcionário</label>
            <input
              type="text"
              id="name"
              name="name"
              class="form-control"
              placeholder="Nome do funcionário"
              v-model="employeeForm.name"
              :class="{
                'is-invalid': isSubmitted && $v.employeeForm.name.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.employeeForm.name.required"
              class="invalid-feedback"
            >
              O campo do nome do funcionário é obrigatório
            </div>
          </div>
          <!-- FIM DO BLOCO: EMPLOYEE NAME -->

          <!-- INÍCIO DO BLOCO: Job Role -->
          <div class="form-group mb-3">
            <label class="font-weigth-bold">Digite seu cargo</label>
            <input
              type="text"
              id="job_role"
              name="job_role"
              class="form-control"
              placeholder="Cargo"
              v-model="employeeForm.job_role"
              :class="{
                'is-invalid': isSubmitted && $v.employeeForm.job_role.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.employeeForm.job_role.required"
              class="invalid-feedback"
            >
              O campo cargo é obrigatório
            </div>
          </div>
          <!-- FIM DO BLOCO: Job Role -->

          <!-- INÍCIO DO BLOCO: Salary -->
          <div class="form-group mb-3">
            <label class="font-weigth-bold">Salário</label>
            <input
              type="number"
              id="salary"
              name="salary"
              class="form-control"
              placeholder="Salário"
              v-model="employeeForm.salary"
              :class="{
                'is-invalid': isSubmitted && $v.employeeForm.salary.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.employeeForm.salary.required"
              class="invalid-feedback"
            >
              O campo salário é obrigatório
            </div>
          </div>
          <!-- FIM DO BLOCO: Salary -->

          <!-- INÍCIO DO BLOCO: Nascimento -->
          <div class="form-group mb-3">
            <label class="font-weigth-bold">Nascimento</label>
            <input
              type="date"
              id="birth"
              name="birth"
              class="form-control"
              placeholder="DD/MM/YYYY"
              v-model="employeeForm.birth"
              :class="{
                'is-invalid': isSubmitted && $v.employeeForm.birth.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.employeeForm.birth.required"
              class="invalid-feedback"
            >
              O campo nascimento é obrigatório
            </div>
          </div>
          <!-- FIM DO BLOCO: Nascimento -->

          <!-- INÍCIO DO BLOCO: Registro de Usuário -->
          <div class="form-group mb-3">
            <label class="font-weigth-bold">Registro de Usuário</label>
            <input
              type="text"
              class="form-control"
              id="employee_registration"
              name="employee_registration"
              placeholder="Registro de Usuário "
              v-model="employeeForm.employee_registration"
              :class="{
                'is-invalid':
                  isSubmitted && $v.employeeForm.employee_registration.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.employeeForm.birth.required"
              class="invalid-feedback"
            >
              O campo regsitro de funcionário é obrigatório
            </div>
          </div>
          <!-- FIM DO BLOCO: Registro de Usuário -->
          <div>
            <button
              @click="submitNewEmployee"
              class="btn btn-primary"
              type="submit"
            >
              <i class="fas fa-user-plus"></i> Add funcionário
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import EmployeeService from "../../services/EmployeeService";

export default {
  comments: {
    name: "CreateEmployeeComponent",
  },
  data() {
    return {
      employeeForm: {
        name: null,
        job_role: null,
        salary: null,
        birth: null,
        employee_registration: null,
      },
      isSubmitted: false,
    };
  },
  validations: {
    employeeForm: {
      name: { required },
      job_role: { required },
      salary: { required },
      birth: { required },
      employee_registration: { required },
    },
  },
  methods: {
    handleSubmitForm() {},

    async submitNewEmployee() {
      try {
        this.isSubmitted = true;

        this.$v.$touch();
        if (this.$v.$invalid) {
          this.$swal('Oops!', 'Você precisa incluir todos os campos requeridos', 'error');
          return;
        }

        await EmployeeService.createNewEmployee(this.employeeForm);
        this.$swal({
          title: "Funcionário add com sucesso.",
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
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>