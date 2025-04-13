import Image from "./Image.jsx";

const Comment = () => {
    return (
        <div className='p-4 bg-slate-50 rounded-xl mb-8'>
            <div className='flex items-center gap-4'>
                <Image src='userImg.jpeg' className='w-10 h-10 rounded-full object-cover' w='40' />
                <span className='font-medium'>John Doe</span>
                <span className='text-sm text-gray-500'>2 days ago</span>
            </div>
            <div className='mt-4'>
                <p>
                    Rain tapped gently on the window, weaving a rhythm softer than any lullaby.
                    He wore mismatched socks to every important meeting, claiming it brought luck.
                    Somewhere in the distance, a harmonica cried out under the fading sun.
                </p>
            </div>
        </div>
    )
}

export default Comment