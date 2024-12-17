import { MainNav } from '@adapters/primary/react/components/header/partials/mainNav';
import { UserNav } from '@adapters/primary/react/components/header/partials/userNav';
import { useMediaQuery } from '@adapters/primary/react/hooks/useMediaQuery';

export default function Header() {
    const isDesktop = useMediaQuery('(min-width: 768px)');

    return (
        <header className='fixed w-full'>
            <div className='border-b'>
                <div className='flex h-20 items-center px-4'>
                    <div className='flex h-16 items-center px-4'>
                        Example.app
                    </div>
                    {isDesktop && <MainNav className='mx-6 ml-auto' />}
                    <div className='ml-auto flex items-center space-x-4'>
                        <UserNav />
                    </div>
                </div>
            </div>
        </header>
    );
}
