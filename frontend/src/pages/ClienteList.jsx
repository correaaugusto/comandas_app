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
    Divider
} from "@mui/material";

import { FiberNew } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

import PageLayout from "../components/common/PageLayout";
import ActionButtons from "../components/common/ActionButtons";

function ClienteList() {

    const navigate = useNavigate();

    const clientes = [
        {
            id: 1,
            nome: "Augusto",
            cpf: "123.456.789-00",
            telefone: "(49)99999-9999"
        },
        {
            id: 2,
            nome: "Maria",
            cpf: "987.654.321-00",
            telefone: "(49)98888-8888"
        }
    ];

    const actions = (

        <Button
            variant="contained"
            startIcon={<FiberNew />}
            onClick={() => navigate("/cliente")}
        >
            Novo
        </Button>

    );

    const handleView = (cliente) => {
        console.log("Visualizar:", cliente);
    };

    const handleEdit = (cliente) => {
        navigate(`/cliente/${cliente.id}`);
    };

    const handleDelete = (cliente) => {
        console.log("Excluir:", cliente);
    };

    const renderMobileCard = (cliente) => (

        <Card key={cliente.id} sx={{ mb: 2 }}>

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
                            {cliente.nome}
                        </Typography>

                    </Box>

                </Box>

                <Divider sx={{ mb: 2 }} />

                <Box sx={{ mb: 2 }}>

                    <Typography variant="body2">
                        <strong>CPF:</strong> {cliente.cpf}
                    </Typography>

                    <Typography variant="body2">
                        <strong>Telefone:</strong> {cliente.telefone}
                    </Typography>

                </Box>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end"
                    }}
                >

                    <ActionButtons
                        item={cliente}
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
            title="Clientes"
            actions={actions}
        >

            {/* Desktop */}

            <Box sx={{ display: { xs: "none", md: "block" } }}>

                <TableContainer component={Paper}>

                    <Table>

                        <TableHead>

                            <TableRow>

                                <TableCell>ID</TableCell>
                                <TableCell>Nome</TableCell>
                                <TableCell>CPF</TableCell>
                                <TableCell>Telefone</TableCell>
                                <TableCell>Ações</TableCell>

                            </TableRow>

                        </TableHead>

                        <TableBody>

                            {clientes.map((cliente) => (

                                <TableRow key={cliente.id} hover>

                                    <TableCell>
                                        {cliente.id}
                                    </TableCell>

                                    <TableCell sx={{ fontWeight: 600 }}>
                                        {cliente.nome}
                                    </TableCell>

                                    <TableCell>
                                        {cliente.cpf}
                                    </TableCell>

                                    <TableCell>
                                        {cliente.telefone}
                                    </TableCell>

                                    <TableCell>

                                        <ActionButtons
                                            item={cliente}
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

            {/* Mobile */}

            <Box sx={{ display: { xs: "block", md: "none" } }}>

                {clientes.map((cliente) =>
                    renderMobileCard(cliente)
                )}

            </Box>

        </PageLayout>
    );
}

export default ClienteList;