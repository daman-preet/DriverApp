import Active from "../screens/Active";
import Airport from "../screens/Airport";
import All from "../screens/All";
import Completed from "../screens/Completed";
import Done from "../screens/Done";
import EarlyMorning from "../screens/EarlyMorning";
import LastMinute from "../screens/LastMinute";
import LateNight from "../screens/LateNight";
import Preferred from "../screens/Preferred";

export const allBookingList = [
    {
        id: 1,
        lastMinute: true,
        preferred: true,
        open: false,
        isAirport: false,
        isEarlyMorning: true,
        isLateNight: false,
        timeTags: true,
        bookingDate: "2024-01-15T10:30:00",
        price: "$45.00",
        from: "161 Elizabeth St, Sydney",
        to: "1 Kent St Sydney1",
        done: false

    },
    {
        id: 2,
        lastMinute: true,
        preferred: true,
        open: false,
        isAirport: true,
        isEarlyMorning: true,
        isLateNight: false,
        timeTags: true,
        bookingDate: "2024-01-15T10:30:00",
        price: "$45.00",
        from: "161 Elizabeth St, Sydney",
        to: "1 Kent St Sydney1",
        done: false

    },
    {
        id: 3,
        lastMinute: false,
        preferred: true,
        open: false,
        isAirport: false,
        isEarlyMorning: false,
        isLateNight: true,
        timeTags: true,
        bookingDate: "2024-01-15T02:30:00",
        price: "$45.00",
        from: "161 Elizabeth St, Sydney",
        to: "1 Kent St Sydney1",
        done: false
    },
    {
        id: 4,
        lastMinute: false,
        preferred: false,
        open: true,
        isAirport: false,
        isEarlyMorning: false,
        isLateNight: true,
        timeTags: false,
        bookingDate: "2024-01-15T14:30:00",
        price: "$45.00",
        from: "161 Elizabeth St, Sydney",
        to: "1 Kent St Sydney1",
        done: false
    },
    {
        id: 5,
        lastMinute: false,
        preferred: false,
        open: true,
        isAirport: false,
        isEarlyMorning: false,
        isLateNight: true,
        timeTags: false,
        bookingDate: "2024-01-15T14:30:00",
        price: "$45.00",
        from: "161 Elizabeth St, Sydney",
        to: "1 Kent St Sydney1",
        done: false
    },
    {
        id: 6,
        lastMinute: false,
        preferred: false,
        open: true,
        isAirport: false,
        isEarlyMorning: false,
        isLateNight: true,
        timeTags: false,
        bookingDate: "2024-01-15T14:30:00",
        price: "$45.00",
        from: "161 Elizabeth St, Sydney",
        to: "1 Kent St Sydney1",
        done: false
    },
    {
        id: 7,
        lastMinute: false,
        preferred: false,
        open: true,
        isAirport: false,
        isEarlyMorning: false,
        isLateNight: true,
        timeTags: false,
        bookingDate: "2024-01-15T14:30:00",
        price: "$45.00",
        from: "161 Elizabeth St, Sydney",
        to: "1 Kent St Sydney1",
        done: true
    },

];

export const myBookingList = [
    {
        id: 1,
        lastMinute: false,
        preferred: true,
        open: false,
        isAirport: true,
        isEarlyMorning: false,
        isLateNight: true,
        timeTags: true,
        bookingDate: "2024-01-15T22:30:00",
        price: "$45.00",
        from: "161 Elizabeth St, Sydney",
        to: "1 Kent St Sydney1",
        done: false
    },
    {
        id: 2,
        lastMinute: false,
        preferred: false,
        open: false,
        isAirport: false,
        isEarlyMorning: false,
        isLateNight: true,
        timeTags: false,
        bookingDate: "2024-01-15T16:30:00",
        price: "$45.00",
        from: "161 Elizabeth St, Sydney",
        to: "1 Kent St Sydney1",
        done: false

    },
]

export const allTabs = [
    { name: 'All', label: 'All', component: All },
    { name: 'LastMinute', label: 'Last Minute', component: LastMinute },
    { name: 'Preferred', label: 'Preferred', component: Preferred },
    { name: 'Airport', label: 'Airport', component: Airport },
    { name: 'EarlyMorning', label: 'Early Morning', component: EarlyMorning },
    { name: 'LateNight', label: 'Late Night', component: LateNight },
    { name: 'Done', label: 'Done', component: Done },
];

export const myBookingAllTabs = [
    { name: 'Active', label: 'Active', component: Active },
    { name: 'Completed', label: 'Completed', component: Completed },
]

export const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8901',
    profilePic: 'https://i.pravatar.cc/150?img=12',
};

export const bookingData = [
    { id: '1', label: 'Time', value: '7:30 AM', field: 'time' },
    { id: '2', label: 'From', value: 'Melbourne Airport', field: 'from' },
    { id: '3', label: 'Stop', value: '45 Queen St, Brisbane QLD', field: 'stop' },
    { id: '4', label: 'To', value: '12 King Rd, Gold Coast QLD', field: 'to' },
    { id: '5', label: 'Flight', value: 'VA123 Domestic', field: 'flight' },
    { id: '6', label: 'Babyseat (x1)', value: '3 years', field: 'babyseat', icon: 'BabySeat' },
    { id: '7', label: 'Customer', value: 'John D', field: 'customer' },
    { id: '8', label: 'Comment', value: 'Call when outside', field: 'comment' },
];