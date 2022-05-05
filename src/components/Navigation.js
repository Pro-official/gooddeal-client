import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { CgMenuGridR } from "react-icons/cg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const solutions = [
	{
		name: "HOME",
		href: "/home",
	},
	{
		name: "DEPOSIT",
		href: "/deposit",
	},
	{
		name: "WITHDRAW",
		href: "/withdraw",
	},
	{
		name: "ACCOUNT",
		href: "/account",
	},
	{
		name: "SIGN UP",
		href: "/signup",
	},
];

export default function Navigation({ handleClick }) {
	const { user, logout } = useAuth();
	// const { admins, setAdmins } = useState([]);
	// useEffect(() => {
	// 	fetch(`https://dry-peak-78703.herokuapp.com/users`)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setAdmins(data);
	// 		});
	// }, []);

	const handleLogout = () => {
		logout();
	};

	return (
		<>
			<Popover className='md:max-w-7xl w-full mx-auto mt-4 flex items-center justify-between'>
				<NavLink to='/home'>
					<div className='flex items-center cursor-pointer text-black'>
						<h1 className='text-4xl font-black font-header md:ml-0 ml-4'>
							GoodDeal
						</h1>
					</div>
				</NavLink>

				<Popover.Group
					as='nav'
					className='text-black hidden md:flex space-x-10'
				>
					<Link
						to='/home'
						className='text-base font-links font-bold mt-2 mr-1 hover:text-blue-500 hover:underline focus:text-black underline-offset-4'
					>
						HOME
					</Link>
					{user.email && (
						<>
							<Link
								to='/deposit'
								className='text-base font-links font-bold mt-2 mr-1 hover:text-blue-500 hover:underline focus:text-black underline-offset-4'
							>
								DEPOSIT
							</Link>
							<Link
								to='/withdraw'
								className='text-base font-links font-bold mt-2 mr-1 hover:text-blue-500 hover:underline focus:text-black underline-offset-4'
							>
								WITHDRAW
							</Link>
							<Link
								to='/account'
								className='text-base font-links font-bold mt-2 mr-1 hover:text-blue-500 hover:underline focus:text-black underline-offset-4'
							>
								ACCOUNT
							</Link>
						</>
					)}

					{user.displayName ? (
						<button
							onClick={handleLogout}
							to='/signup'
							className='text-base hover:text-blue-500 font-links font-bold mt-2 mr-1  focus:text-black'
						>
							LOGOUT{" "}
							<span className='border-2 border-black py-1 px-2 rounded-lg'>
								{user.displayName.split(" ")[0]}
							</span>
						</button>
					) : (
						<Link
							to='/signup'
							className='text-base hover:text-blue-500 font-links font-bold mt-2 mr-1  focus:text-black '
						>
							SIGN UP
						</Link>
					)}
				</Popover.Group>
				<div className='mr-4 my-2 md:hidden'>
					<Popover.Button>
						<span className='sr-only'>Open menu</span>
						<CgMenuGridR
							className='h-6 w-6 ml-auto text-black'
							aria-hidden='true'
						/>
					</Popover.Button>
				</div>

				<Transition
					as={Fragment}
					enter='duration-200 ease-out'
					enterFrom='opacity-0 scale-95'
					enterTo='opacity-100 scale-100'
					leave='duration-100 ease-in'
					leaveFrom='opacity-100 scale-100'
					leaveTo='opacity-0 scale-95'
				>
					<Popover.Panel
						focus
						className='absolute bg-black top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
					>
						<div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-black divide-y-2 divide-gray-50'>
							<div className='pt-5 pb-6 px-5'>
								<div className='flex items-center justify-between'>
									<div>
										<div className='flex items-center'>
											<h1 className='text-4xl font-black font-title '>
												GoodDeal
											</h1>
										</div>
									</div>
									<div className='-mr-2'>
										<Popover.Button className='bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
											<span className='sr-only'>Close menu</span>
											<AiOutlineCloseCircle
												className='h-6 w-6'
												aria-hidden='true'
											/>
										</Popover.Button>
									</div>
								</div>
								<div className='mt-6 text-center'>
									<nav className='grid gap-y-8'>
										{solutions.map((item) => (
											<Link
												key={item.name}
												to={`/${item.href.toLowerCase()}`}
												className='text-base font-title font-bold mr-4 hover:text-blue-500'
											>
												{item.name}
											</Link>
										))}
									</nav>
								</div>
							</div>
						</div>
					</Popover.Panel>
				</Transition>
			</Popover>
			<hr className='mt-2 w-full md:max-w-7xl mx-auto border-solid border-black' />
		</>
	);
}
