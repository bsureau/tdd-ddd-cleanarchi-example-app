import LoginForm from '@adapters/primary/react/pages/auth/partials/loginForm';
import { NavLink } from 'react-router';

export default function LoginUser() {
    return (
        <>
            <div className='container relative h-screen flex-col items-center justify-center grid max-w-none  lg:grid-cols-[40%_60%] lg:px-0'>
                <div className='p-8'>
                    <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
                        <div className='flex flex-col space-y-2 text-center'>
                            <h1 className='text-2xl font-semibold tracking-tight'>
                                Se connecter
                            </h1>
                            <p className='text-sm text-muted-foreground'>
                                Saisissez votre adresse email et votre mot de
                                passe
                            </p>
                        </div>
                        <LoginForm />
                        <p className='text-center text-sm text-muted-foreground'>
                            Pas encore de compte ?{' '}
                            <NavLink to='/register'>Créer un compte</NavLink>
                        </p>
                    </div>
                </div>
                <div className='relative h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
                    <div className='absolute inset-0 bg-zinc-900' />
                    <div className='relative z-20 flex items-center text-lg font-medium'>
                        Example App
                    </div>
                    <div className='relative z-20 mt-auto'>
                        <blockquote className='space-y-2'>
                            <p className='text-lg'>
                                &ldquo;This library has saved me countless hours
                                of work and helped me deliver stunning designs
                                to my clients faster than ever before.&rdquo;
                            </p>
                            <footer className='text-sm'>Sofia Davis</footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </>
    );
}
