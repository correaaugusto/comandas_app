import { useForm, Controller } from "react-hook-form";
import { useMasks } from '../hooks/useMasks';

import {
    TextField,
    Button,
    Box
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import PageLayout from "../components/common/PageLayout";
import useValidationRules from "../hooks/useValidationRules";

const ClienteForm = () => {

    const navigate = useNavigate();

    const validationRules = useValidationRules();

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log("Cliente:", data);
    };

    const handleCancel = () => {
        navigate("/clientes");
    };

    const {
            applyCpfMask,
            applyPhoneMask,
            cleanCpf,
            cleanPhone
        } = useMasks();

    return (

        <PageLayout title="Dados Cliente">

            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
            >

                <Controller
                    name="nome"
                    control={control}
                    defaultValue=""
                    rules={validationRules.nome}
                    render={({ field }) => (

                        <TextField
                            {...field}
                            label="Nome"
                            fullWidth
                            margin="normal"
                            error={!!errors.nome}
                            helperText={errors.nome?.message}
                        />

                    )}
                />

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

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        mt: 3
                    }}
                >

                    <Button
                        sx={{ mr: 1 }}
                        onClick={handleCancel}
                    >
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

        </PageLayout>
    );
};

export default ClienteForm;