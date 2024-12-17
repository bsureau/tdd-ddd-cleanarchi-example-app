'use client';

import * as React from 'react';

import { cn } from '@adapters/primary/react/lib/utils';
import { Icons } from '@adapters/primary/react/components/ui/icons';
import { Button } from '@adapters/primary/react/components/ui/button';
import { Input } from '@adapters/primary/react/components/ui/input';
import { Label } from '@adapters/primary/react/components/ui/label';
import { Checkbox } from '@adapters/primary/react/components/ui/checkbox';
import { Controller, useForm } from 'react-hook-form';

interface RegisterFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function RegisterForm({
    className,
    ...props
}: RegisterFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const {
        register,
        control,
        handleSubmit,
        formState: { isValid },
    } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div
            className={cn('grid gap-6', className)}
            {...props}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid gap-5'>
                    <div className='grid gap-1'>
                        <Label
                            className='sr-only'
                            htmlFor='email'
                        >
                            Email
                        </Label>
                        <Input
                            {...register('email', {
                                required: 'Email requis',
                                pattern: {
                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: 'Invalid email address',
                                },
                            })}
                            id='email'
                            placeholder='Adresse email'
                            type='email'
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
                            {...register('password')}
                            id='password'
                            placeholder='Mot de passe'
                            type='password'
                            disabled={isLoading}
                        />
                    </div>
                    <div className='grid gap-5'>
                        <Label
                            className='sr-only'
                            htmlFor='confirm-password'
                        >
                            Confirmez le mot de passe
                        </Label>
                        <Input
                            {...register('confirmPassword')}
                            id='confirm-password'
                            placeholder='Confirmez le mot de passe'
                            type='password'
                            disabled={isLoading}
                        />
                    </div>
                    <div className='grid gap-5'>
                        <div className='items-top flex space-x-2'>
                            <Controller
                                name='agreeToTerms'
                                control={control}
                                render={({ field }) => (
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                )}
                            />

                            <div
                                id='terms1'
                                className='grid gap-1.5 leading-none'
                            >
                                <p className='text-sm text-muted-foreground'>
                                    J'ai lu et j'accepte les CGU et la politique
                                    de confidentialité
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='grid gap-5'>
                        <div className='items-top flex space-x-2'>
                            <Checkbox {...register('terms2')} />
                            <div
                                id='terms2'
                                className='grid gap-1.5 leading-none'
                            >
                                <p className='text-sm text-muted-foreground'>
                                    S'inscrire à notre newsletter
                                </p>
                            </div>
                        </div>
                    </div>
                    <Button disabled={!isValid}>
                        {isLoading && (
                            <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
                        )}
                        Valider l'inscription
                    </Button>
                </div>
            </form>
        </div>
    );
}
