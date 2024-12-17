import { NavLink } from 'react-router';

import { cn } from '@adapters/primary/react/lib/utils';
import { useMediaQuery } from '@adapters/primary/react/hooks/useMediaQuery';

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    const isDesktop = useMediaQuery('(min-width: 768px)');

    return (
        <nav
            className={cn(
                'flex items-center space-x-4 lg:space-x-6',
                className
            )}
            {...props}
        >
            <NavLink
                to='/examples/dashboard'
                className={cn(
                    'font-medium transition-colors hover:text-primary',
                    isDesktop ? 'text-sm' : 'text-xl'
                )}
            >
                Overview
            </NavLink>
            <NavLink
                to='/examples/dashboard'
                className={cn(
                    'font-medium text-muted-foreground transition-colors hover:text-primary',
                    isDesktop ? 'text-sm' : 'text-xl'
                )}
            >
                Customers
            </NavLink>
            <NavLink
                to='/examples/dashboard'
                className={cn(
                    'font-medium text-muted-foreground transition-colors hover:text-primary',
                    isDesktop ? 'text-sm' : 'text-xl'
                )}
            >
                Products
            </NavLink>
            <NavLink
                to='/examples/dashboard'
                className={cn(
                    'font-medium text-muted-foreground transition-colors hover:text-primary',
                    isDesktop ? 'text-sm' : 'text-xl'
                )}
            >
                Settings
            </NavLink>
        </nav>
    );
}
