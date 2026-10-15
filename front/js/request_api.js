import {CONFIG} from "./config.js";

//process.env.PORT;
export async function getGames()
{
    const apiKey = CONFIG.RAWG_API_KEY;
    const apiUrl = CONFIG.RAWG_URL;

    try {
        console.log(`${apiUrl}/games?key=${apiKey}`);
        const response = await fetch(`${apiUrl}/games?key=${apiKey}&ordering=-rating`);
        if(!response.ok)
        {
            throw Error(response.statusText);
        }
        return await response.json();
    }
    catch (error)
    {
        throw Error(error);
    }
}


export async function getGamesByName(name)
{
    const apiKey = CONFIG.RAWG_API_KEY;
    const apiUrl = CONFIG.RAWG_URL;

    try {
        const response = await fetch(`${apiUrl}/games?key=${apiKey}&search="${name}"&page_size=12&ordering=-rating`);
        if(!response.ok)
        {
            throw Error(response.statusText);
        }
        return await response.json();
    }
    catch (error)
    {
        throw Error(error);
    }
}

export async function getGameById(id)
{
    const apiKey = CONFIG.RAWG_API_KEY;
    const apiUrl = CONFIG.RAWG_URL;

    try {
        const response = await fetch(`${apiUrl}/games/${id}?key=${apiKey}`);
        if(!response.ok)
        {
            throw Error(response.statusText);
        }
        return await response.json();
    }
    catch (error)
    {
        throw Error(error);
    }
}

export async function getGamesByCategory(category)
{
    const apiKey = CONFIG.RAWG_API_KEY;
    const apiUrl = CONFIG.RAWG_URL;

    try {
        const response = await fetch(`${apiUrl}/games?key=${apiKey}&genres=${category}&ordering=-rating`);
        if(!response.ok)
        {
            throw Error(response.statusText);
        }
        return await response.json();
    }
    catch (error)
    {
        throw Error(error);
    }
}

export async function getRecentGames()
{
    const apiKey = CONFIG.RAWG_API_KEY;
    const apiUrl = CONFIG.RAWG_URL;
    const today = new Date();
    const aMonthAgo = new Date(new Date().setMonth(parseInt(today.getMonth()-1)));

    const todayFormatted = today.getFullYear() + "-" + ( (today.getMonth()+1) < 10 ? ("0" +(today.getMonth()+1)) : (today.getMonth()+1) ) + "-" + today.getDate();
    const aMonthAgoFormatted = aMonthAgo.getFullYear() + "-" + ( (aMonthAgo.getMonth()+1) < 10 ? ("0" +(aMonthAgo.getMonth()+1)) : (aMonthAgo.getMonth()+1) ) + "-" + aMonthAgo.getDate();

    const req = `${apiUrl}/games?key=${apiKey}&dates=${aMonthAgoFormatted},${todayFormatted}&ordering=-release`;
    try {
        const response = await fetch(req);
        if(!response.ok)
        {
            throw Error(response.statusText);
        }
        return await response.json();
    }
    catch (error)
    {
        throw Error(error);
    }
}