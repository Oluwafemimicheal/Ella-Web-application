import { ArrowRight } from 'lucide-react'


export const HeroDisplayCard = ({hero}) => {

  return (
    <div className={`${hero?.bg} h-full w-full flex justify-center items-center`}>
      <div className='w-300 mx-auto'>
        <div className='w-full'>
          <h1 className='text-5xl max-w-4xl tracking-wide leading-14  mb-2 font-semibold'>{hero?.title}</h1>
          <p className='text-3xl '>{hero?.desc}</p>
        </div>
        <div className='mt-10 flex items-center gap-5'>
          <button className='bg-gold-soft hover:bg-gold py-2 px-5 font-bold text-white rounded-lg cursor-pointer relative overflow-hidden'> Shop Now</button>
          <button className='group flex items-center gap-1 font-semibold py-2 px-5 cursor-pointer hover:underline'>Look in for brand <ArrowRight size={18} className='group-hover:translate-x-2 transition' /></button>
        </div>
      </div>
    </div>
  )
}

