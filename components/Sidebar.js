import Image from 'next/image'
import useQuiosco from '../hooks/useQuiosco'
import { Categoria } from './Categoria';


export const Sidebar = () => {

    const { categorias } = useQuiosco();
    return (
        <>
            <Image width={300} height={100} src='/assets/img/logo.svg' alt='image logotipo' />
            <nav className='mt-10'>
                {categorias.map(cat => (
                    <Categoria key={cat.id} categoria={cat} />
                )
                )
                }
            </nav>
        </>
    )
}
