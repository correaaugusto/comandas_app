import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import showSnackbar from "../utils/snackbar";

// PrivateRoute é um componente React usado para proteger rotas que requerem autenticação.
// Ele verifica se o usuário está autenticado e, com base nisso,
// decide se renderiza o conteúdo protegido (children),
// ou redireciona o usuário para a página de login.
export default function PrivateRoute({ children }) {

    // O hook useAuth é usado para acessar o contexto de autenticação.
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {

        showSnackbar(
            "Você precisa fazer login para acessar esta página!",
            "warning"
        );

        return <Navigate to="/login" replace />;
    }


    // O valor de isAuthenticated indica se o usuário está autenticado ou não.
    // Se o usuário estiver autenticado, renderiza os componentes filhos (children).
    // Caso contrário, redireciona o usuário para a página de login ("/login").
    return isAuthenticated
        ? children
        : <Navigate to="/login" replace />;
}