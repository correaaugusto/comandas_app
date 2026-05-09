import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Card,
    CardContent,
    Typography,
    Box,
    Divider,
    Chip
} from "@mui/material";

import { FiberNew } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import PageLayout from "../components/common/PageLayout";
import ActionButtons from "../components/common/ActionButtons";


function FuncionarioList() {

    const navigate = useNavigate();

    const funcionarios = [
        {
            id: 1,
            nome: "Augusto",
            matricula: "2025001",
            cpf: "123.456.789-00",
            telefone: "(49) 99999-9999",
            grupo: 1
        },
        {
            id: 2,
            nome: "Maria",
            matricula: "2025002",
            cpf: "987.654.321-00",
            telefone: "(49) 98888-8888",
            grupo: 2
        }
    ];

    const getGrupoLabel = (grupo) => {
        switch (grupo) {
            case 1:
                return "Administrador";
            case 2:
                return "Caixa";
            case 3:
                return "Atendente";
            default:
                return "Grupo";
        }
    };

    const handleView = (funcionario) => {
        console.log("Visualizar:", funcionario);
    };

    const handleEdit = (funcionario) => {
        navigate(`/funcionario/${funcionario.id}`);
    };

    const handleDelete = (funcionario) => {
        console.log("Excluir:", funcionario);
    };

    const actions = (
        <Button
            variant="contained"
            startIcon={<FiberNew />}
            onClick={() => navigate("/funcionario")}
        >
            Novo
        </Button>
    );

    const renderMobileCard = (funcionario) => (

        <Card key={funcionario.id} sx={{ mb: 2 }}>

            <CardContent>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 2
                    }}
                >

                    <Box>

                        <Typography
                            variant="h6"
                            sx={{ fontWeight: 600 }}
                        >
                            {funcionario.nome}
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            Matrícula: {funcionario.matricula}
                        </Typography>

                    </Box>

                    <Chip
                        label={getGrupoLabel(funcionario.grupo)}
                        color="primary"
                        size="small"
                    />

                </Box>

                <Divider sx={{ mb: 2 }} />

                <Box sx={{ mb: 2 }}>

                    <Typography variant="body2">
                        <strong>CPF:</strong> {funcionario.cpf}
                    </Typography>

                    <Typography variant="body2">
                        <strong>Telefone:</strong> {funcionario.telefone}
                    </Typography>

                </Box>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end"
                    }}
                >

                    <ActionButtons
                        item={funcionario}
                        onView={handleView}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />

                </Box>

            </CardContent>

        </Card>
    );

    return (

        <PageLayout
            title="Funcionários"
            actions={actions}
        >

            <Box sx={{ display: { xs: "none", md: "block" } }}>

                <TableContainer component={Paper}>

                    <Table>

                        <TableHead>

                            <TableRow>

                                <TableCell>ID</TableCell>
                                <TableCell>Nome</TableCell>
                                <TableCell>Matrícula</TableCell>
                                <TableCell>CPF</TableCell>
                                <TableCell>Telefone</TableCell>
                                <TableCell>Grupo</TableCell>
                                <TableCell>Ações</TableCell>

                            </TableRow>

                        </TableHead>

                        <TableBody>

                            {funcionarios.map((funcionario) => (

                                <TableRow key={funcionario.id} hover>

                                    <TableCell>{funcionario.id}</TableCell>

                                    <TableCell>
                                        {funcionario.nome}
                                    </TableCell>

                                    <TableCell>
                                        {funcionario.matricula}
                                    </TableCell>

                                    <TableCell>
                                        {funcionario.cpf}
                                    </TableCell>

                                    <TableCell>
                                        {funcionario.telefone}
                                    </TableCell>

                                    <TableCell>

                                        <Chip
                                            label={getGrupoLabel(funcionario.grupo)}
                                            color="primary"
                                            size="small"
                                        />

                                    </TableCell>

                                    <TableCell>

                                        <ActionButtons
                                            item={funcionario}
                                            onView={handleView}
                                            onEdit={handleEdit}
                                            onDelete={handleDelete}
                                        />

                                    </TableCell>

                                </TableRow>

                            ))}

                        </TableBody>

                    </Table>

                </TableContainer>

            </Box>

            <Box sx={{ display: { xs: "block", md: "none" } }}>

                {funcionarios.map((funcionario) =>
                    renderMobileCard(funcionario)
                )}

            </Box>

        </PageLayout>
    );
}

export default FuncionarioList;