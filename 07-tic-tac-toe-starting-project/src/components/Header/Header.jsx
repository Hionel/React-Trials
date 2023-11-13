import headerLogoPath from "/game-logo.png?url";

const Header = () => {
	return (
		<header>
			<img src={headerLogoPath} alt="Game logo" />
			<h1>Tic-Tac-Toe</h1>;
		</header>
	);
};
export default Header;
