'use client';

import * as React from 'react';

import { cn } from '@adapters/primary/react/lib/utils';
import { Icons } from '@adapters/primary/react/components/ui/icons';
import { Button } from '@adapters/primary/react/components/ui/button';
import { Input } from '@adapters/primary/react/components/ui/input';
import { Label } from '@adapters/primary/react/components/ui/label';

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function LoginForm({ className, ...props }: LoginFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }

    return (
        <div
            className={cn('grid gap-6', className)}
            {...props}
        >
            <form onSubmit={onSubmit}>
                <div className='grid gap-5'>
                    <div className='grid gap-1'>
                        <Label
                            className='sr-only'
                            htmlFor='email'
                        >
                            Email
                        </Label>
                        <Input
                            id='email'
                            placeholder='Adresse email'
                            type='email'
                            autoCapitalize='none'
                            autoComplete='email'
                            autoCorrect='off'
                            disabled={isLoading}
                        />
                    </div>
                    <div className='grid gap-5'>
                        <Label
                            className='sr-only'
                            htmlFor='password'
                        >
                            Mot de passe
                        </Label>
                        <Input
                            id='password'
                            placeholder='Mot de passe'
                            type='password'
                            autoCapitalize='none'
                            autoComplete='email'
                            autoCorrect='off'
                            disabled={isLoading}
                        />
                    </div>
                    <Button disabled={isLoading}>
                        {isLoading && (
                            <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
                        )}
                        Connexion
                    </Button>
                </div>
            </form>
        </div>
    );
}
