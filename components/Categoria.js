import Image from 'next/image';
import useQuiosco from '../hooks/useQuiosco';


export const Categoria = ({ categoria }) => {
    const { nombre, icono, id } = categoria;

    const { categoriaActual, handleClickCategoria } = useQuiosco();


    return (
        <div className={`${categoriaActual?.id === id ? 'bg-amber-400' : ''} flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}>
            <Image
                width={70}
                height={70}
                src={`/assets/img/icono_${icono}.svg`}
                alt='imagen icono'
            />
            <button
                type='button'
                className='text-xl font-bold hover:cursor-pointer'
                onClick={() => handleClickCategoria(id)}
            >
                {nombre}
            </button>
        </div>
    )
}
