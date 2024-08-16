import React from "react";

function InfoSection() {
    return (
        <div className="bg-gray-200 py-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Column 1 */}
                    <div className="col-span-1">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                            Opulent Finds!
                        </h2>
                        <p className="text-base text-gray-600 leading-6 text-center">
                            Distribute-X Company brings you the epitome of
                            luxury timepieces. Crafted in the heart of
                            Moringa, our products are a testament to Swiss
                            excellence, combining rugged beauty with unmatched
                            luxury.
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div className="col-span-1">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                        Where Mastery Meets Magic
                        </h2>
                        <p className="text-base text-gray-600 leading-6 text-center">
                        Step into Distribute-X’s Digital Wonderland!
                        Here, ones and zeros waltz, and pixels weave 
                        tales. Our virtual shelves—like spellbound 
                        bookcases—hold treasures: from moonlit baubles to code 
                        snippets humming with promise. Seek a pixelated 
                        tiara or a digital compass? We’ve got your adventure 
                        covered. Grab your mouse—it’s time to explore!
                        </p>
                    </div>

                    {/* Column 3 */}
                    <div className="col-span-1">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                            Sustainable Luxury
                        </h2>
                        <p className="text-base text-gray-600 leading-6 text-center">
                        Where Code Meets Curiosity: The Digital Emporium of Distribute-X
                        In the hidden alleys of cyberspace, Distribute-X unfurls its virtual 
                        banners. Here, algorithms pirouette, and pixels hum symphonies.
                         Our shelves—crafted from lines of code—display wonders: from binary 
                         brooches that shimmer with zeroes and ones to e-books that whisper 
                         forgotten tales. Whether you seek a pixelated potion or an API compass 
                         to navigate the data wilderness, we’ve woven spells for every seeker. 
                         So, don your digital cloak, and step into our byte-spun wonderland!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoSection;
