import React from 'react';
import {
	Link,
	Outlet,
	useLocation,
	useNavigate,
} from 'react-router-dom';

export const Navbar = () => {
	const { state } = useLocation();
	const navigate = useNavigate();

	console.log(state);

	const onLogout = () => {
		navigate('/login', {
			replace: true,
		});
	};

	return (
		<>
			<header>
				<h1>
					<Link to='/'>Logo</Link>
				</h1>

				{state?.logged ? (
					<div className='user'>
						<span className='username'>{state?.name}</span>
						<button className='btn-logout' onClick={onLogout}>
							Cerrar sesión
						</button>

						<nav>
							<Link to='/Juegos'>Juegos</Link>
							<Link to='/Compras'>Compras</Link>
							<Link to='/Perfil'>Perfil</Link>



						</nav>

					</div>
				) : (
					<nav>
						<Link to='/login'>Iniciar sesión</Link>
						<Link to='/register'>Registrarse</Link>
						<Link to='/Contact'>Contacto</Link>
						<Link to='/Product'>Producto</Link>
						<Link to='/Service'>Servicios</Link>

					</nav>
				)}
			</header>

			<Outlet />
		</>
	);
};