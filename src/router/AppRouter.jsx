import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../Navbar';
import {
	HomePage,
	DashboardPage,
	LoginPage,
	RegisterPage,
	ContactPage,
	ProductPage,
	ServicesPage,
	JuegosPage,
	ComprasPage,

} from '../pages';
import { PrivateRoute } from './PrivateRoute';
import { PerfilPage } from '../pages/PerfilPage';

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Navbar />}>
					<Route index element={<HomePage />} />
					<Route path='login' element={<LoginPage />} />
					<Route path='register' element={<RegisterPage />} />
					<Route path='Contact' element={<ContactPage />} />
					<Route path='Service' element={<ServicesPage />} />
					<Route path='Product' element={<ProductPage />} />



					<Route
						path='dashboard'
						element={
							<PrivateRoute>
								<DashboardPage />
							</PrivateRoute>
						}
					/>
					<Route
						path='Juegos'
						element={
							<PrivateRoute>
								<JuegosPage />
							</PrivateRoute>
						}
					/>
					<Route
						path='Compras'
						element={
							<PrivateRoute>
								<ComprasPage />
							</PrivateRoute>
						}
					/>
					<Route
						path='Perfil'
						element={
							<PrivateRoute>
								<PerfilPage />
							</PrivateRoute>
						}
					/>
				</Route>

				
			</Routes>
		</>
	);
};