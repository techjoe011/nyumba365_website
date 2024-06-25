'use client';

import Image from 'next/image';

import Link from 'next/link';
import { CustomButton } from './';

const Hero = () => {
    const handleScroll = () => {
        const nextSection = document.getElementById('discover');

        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                Discover. Decide. Move In.
                </h1>
                <p className="hero__subtitle">
                Your all-in-one solution: Find, view, and move into your new home.
                </p>
                

<Link
                    href="/your-app-url"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-blue text-white rounded-full mt-10 px-6 py-3 inline-block"
                >
                    Get Started
                </Link>
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image
                        src="/hero.png"
                        alt="hero"
                        fill
                        className="object-contain"
                    />
                </div>

                <div className="hero__image-overlay" />
            </div>
        </div>
    );
};

export default Hero;
