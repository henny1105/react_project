export default function Header() {
	const condition = true;
	const name1 = 'hyein';
	const name2 = 'jisu';
	const colors = ['red', 'pink'];

	// JSX 안쪽에서 변수활용이나 연산식을 쓰려면 무조건 {}로 감싸서 처리
	// JSX 안쪽에서는 if, for문 처리 불가
	// JSX 안쪽에서는 삼항연산자, map 처리 가능

	return (
		<header>
			<h1>{condition ? name1 : name2}</h1>

			<ul>
				{colors.map((el) => {
					return <li>{el}</li>;
				})}
			</ul>
		</header>
	);
}
