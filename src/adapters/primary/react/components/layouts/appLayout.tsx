import Header from '@adapters/primary/react/components/header/header';
import { useMediaQuery } from '@adapters/primary/react/hooks/useMediaQuery';
import { cn } from '@adapters/primary/react/lib/utils';

export default function AppLayout({ children }: { children: React.ReactNode }) {
    const isDesktop = useMediaQuery('(min-width: 768px)');

    return (
        <>
            <Header />
            <main
                className={cn(
                    'flex flex-1 flex-col gap-4 pt-20',
                    isDesktop && 'pt-28 pl-32 pr-32'
                )}
            >
                {children}
            </main>
        </>
    );
}
