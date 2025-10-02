function Card(props) {
// else take multiple vals in args + u can set default vals same way
    console.log("props: ", props);
    return (
        <>
            <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
			<div><img class="size-48 shadow-xl rounded-md" alt="" src="https://tailwindcss.com/_next/static/media/cover.de1997f7.png" /></div>
			<div class="flex items-center md:items-start">
				<span class="text-2xl font-medium">{props.album_name}</span>
				<span class="font-medium text-sky-500">{props.myobj.username}</span>
				<span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
				<span>{props.myobj.album_no}</span>
				<span>·</span>
				<span>{props.myobj.year}</span>
				</span>
			</div>
			</div>
        </>
    )
}
export default Card




