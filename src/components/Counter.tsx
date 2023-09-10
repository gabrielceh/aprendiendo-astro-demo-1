import { useState } from 'preact/hooks';

export function Counter() {
	const [counter, setCounter] = useState(0);

	return (
		<div className='flex gap-4'>
			<button class='p-3 border-solid border-[1px] border-slate-400' onClick={() => setCounter((counter) => counter - 1)}>
				➖
			</button>
			<span class='p-3'>{counter}</span>
			<button class='p-3 border-solid border-[1px] border-slate-400' onClick={() => setCounter((counter) => counter + 1)}>
				➕
			</button>
		</div>
	);
}
