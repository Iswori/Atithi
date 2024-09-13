'use client'

import { Search } from "lucide-react";
import { Input } from "./ui/input";



const SearchInput = () => {
    return ( <div className="relative sm:block hidden">
        <Search className="absolute w-4 h-4 top-3 left-4"/>
        <Input placeholder="Search" className="pl-10 bg-primary/10"/>
    </div> );
}
 
export default SearchInput;