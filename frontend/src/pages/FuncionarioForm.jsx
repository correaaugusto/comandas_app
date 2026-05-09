import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Grid,
  MenuItem,
  InputLabel,
  Paper
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import PageLayout from "../components/common/PageLayout";
import useValidationRules from "../hooks/useValidationRules";
import { useMasks } from '../hooks/useMasks';

const FuncionarioForm = () => {
  const navigate = useNavigate();
  const validationRules = useValidationRules();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log("Dados funcionário:", data);
  };

  const handleCancel = () => {
    navigate("/funcionarios");
  };

  
    const {
            applyCpfMask,
            applyPhoneMask,
            cleanCpf,
            cleanPhone
        } = useMasks();

  return (
    <PageLayout title="Funcionário">
      <Paper sx={{ p: 3 }}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>

          <Grid container spacing={3}>

            {/* Nome */}
            <Grid item xs={12} md={6}>
              <InputLabel sx={{ mb: 1 }}>Nome</InputLabel>

              <Controller
                name="nome"
                control={control}
                defaultValue=""
                rules={validationRules.nome}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    placeholder="Digite o nome"
                    error={!!errors.nome}
                    helperText={errors.nome?.message}
                  />
                )}
              />
            </Grid>

            {/* Matrícula */}
            <Grid item xs={12} md={6}>
              <InputLabel sx={{ mb: 1 }}>Matrícula</InputLabel>

              <Controller
                name="matricula"
                control={control}
                defaultValue=""
                rules={{
                  required: "Matrícula é obrigatória"
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    placeholder="Digite a matrícula"
                    error={!!errors.matricula}
                    helperText={errors.matricula?.message}
                  />
                )}
              />
            </Grid>

            {/* CPF */}
            <Grid item xs={12} md={4}>
              <InputLabel sx={{ mb: 1 }}>CPF</InputLabel>

              <Controller
                        name="cpf"
                        control={control}
                        defaultValue=""
                        rules={validationRules.cpf}
                        render={({ field }) => (

                        <TextField
                            {...field}
                            label="CPF"
                            fullWidth
                            margin="normal"

                            error={!!errors.cpf}

                            helperText={errors.cpf?.message}

                            onChange={(e) => {

                                const value =
                                    cleanCpf(e.target.value);

                                field.onChange(value);
                            }}

                            value={
                                field.value
                                    ? applyCpfMask(field.value)
                                    : ""
                            }

                            inputProps={{
                                maxLength: 14
                            }}
                        />

                    )}
                />
            </Grid>

            {/* Telefone */}
            <Grid item xs={12} md={4}>
              <InputLabel sx={{ mb: 1 }}>Telefone</InputLabel>

              <Controller
                    name="telefone"
                    control={control}
                    defaultValue=""
                    rules={validationRules.telefone}
                    render={({ field }) => (

                        <TextField
                            {...field}
                            label="Telefone"
                            fullWidth
                            margin="normal"

                            onChange={(e) => {

                                const value =
                                    cleanPhone(e.target.value);

                                field.onChange(value);
                            }}

                            value={
                                field.value
                                    ? applyPhoneMask(field.value)
                                    : ""
                            }

                            inputProps={{
                                maxLength: 15
                            }}
                        />

                    )}
                />
            </Grid>

            {/* Grupo */}
            <Grid item xs={12} md={4}>
              <InputLabel sx={{ mb: 1 }}>Grupo</InputLabel>

              <Controller
                name="grupo"
                control={control}
                defaultValue=""
                rules={{
                  required: "Grupo é obrigatório"
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    fullWidth
                    error={!!errors.grupo}
                    helperText={errors.grupo?.message}
                  >
                    <MenuItem value={1}>Administrador</MenuItem>
                    <MenuItem value={2}>Caixa</MenuItem>
                    <MenuItem value={3}>Atendente</MenuItem>
                  </TextField>
                )}
              />
            </Grid>

            {/* Senha */}
            <Grid item xs={12}>
              <InputLabel sx={{ mb: 1 }}>Senha</InputLabel>

              <Controller
                name="senha"
                control={control}
                defaultValue=""
                rules={validationRules.senha}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="password"
                    fullWidth
                    placeholder="Digite a senha"
                    error={!!errors.senha}
                    helperText={errors.senha?.message}
                  />
                )}
              />
            </Grid>

          </Grid>

          {/* Botões */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 2,
              mt: 4
            }}
          >
            <Button onClick={handleCancel}>
              Cancelar
            </Button>

            <Button
              type="submit"
              variant="contained"
            >
              Salvar
            </Button>
          </Box>

        </Box>
      </Paper>
    </PageLayout>
  );
};

export default FuncionarioForm;