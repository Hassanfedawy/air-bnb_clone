"use client"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faGlobe, faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import Link from 'next/link';

function Header() {
    const [searchValue, setSearchValue] = useState<string>("");
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());
    const [guests, setGuests] = useState<number>(1);

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    };

    const handleSelect = (ranges: any) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate); 
    };

    return (
        <header className="sticky top-0 z-50 p-5 md:px-10 grid grid-cols-3 bg-white shadow-md">
            <Link href={"/"}>
                <Image 
                    src="https://links.papareact.com/qd3" 
                    loading="lazy" 
                    alt="Logo" 
                    width={150} 
                    height={70} 
                    style={{ objectFit: 'contain' }} 
                />
            </Link>

            <div className="flex items-center md:border-2 rounded-full md:shadow-sm py-2">
                <input 
                    className="pl-4 bg-transparent outline-none flex-grow text-sm text-gray-400" 
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    type="text" 
                    placeholder="Start Your Search" 
                />
                <FontAwesomeIcon 
                    icon={faSearch} 
                    height={40} 
                    width={40} 
                    className="hidden md:inline-flex text-center bg-red-400 text-white rounded-full p-3 cursor-pointer mx-2" 
                />
            </div>

            <div className="space-x-4 flex items-center justify-end text-gray-500">
                <p className="hidden md:inline cursor-pointer">Become a Host</p>
                <FontAwesomeIcon icon={faGlobe} className="h-6" />
                <div className="flex border-2 rounded-full space-x-4 p-3 items-center">
                    <FontAwesomeIcon icon={faBars} className="h-6" />
                    <FontAwesomeIcon icon={faUser} className="h-6" />
                </div>
            </div>

            {searchValue && (
                <div className="col-span-3 mx-auto">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#fd5b61"]}
                        onChange={handleSelect}
                    />
                    <div className="flex justify-between items-center border-b-2 mb-3">
                        <h2 className="text-2xl p-2 font-semibold">Number of guests</h2>
                        <div>
                        <FontAwesomeIcon icon={faUser} className="h-5" />
                        <input 
                            type="number" 
                            className="w-12 pl-2 text-lg outline-none text-red-400"
                            value={guests}
                            onChange={(e) => setGuests(parseInt(e.target.value))} 
                            min={1}
                        />
                        </div>
                    </div>

                    <div className='flex'>
                    <button className='flex-grow text-gray-500' onClick={() => setSearchValue("")}>
                    Cancel
                </button>
                    <button>
                    <Link href={"/Search"} className='flex-grow text-red-400'>
                    Search
                    </Link>
                    </button>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
