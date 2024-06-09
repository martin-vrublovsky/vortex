import './TableOfUsers.css'
import { useState, useEffect } from 'react'
import DateFilter from './DateFilter'
import ReactEcharts from 'echarts-for-react'
import TableHeader from './TableHeader'
import UserItem from './UserItem'

const TableOfUsers = () => {
    const [listOfUsers, setListOfUsers] = useState([])

    const [totalUsers] = useState(0)
    const [displayedUsers, setDisplayedUsers] = useState(0)

    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    useEffect(() => {
        fetch('https://run.mocky.io/v3/a32f2030-32b0-4c5d-8ada-c3b67cf2cbfe')
            .then(res => res.json())
            .then(data => setListOfUsers(data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        setDisplayedUsers(getDisplayedUsers())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [startDate, endDate])

    const getDisplayedUsers = () => {
        if (!startDate || !endDate) {
            return totalUsers
        }

        const filteredData = listOfUsers.filter((item) => {
            const birthday = new Date(item.birthday)
            return birthday >= new Date(startDate) && birthday <= new Date(endDate)
        })

        setListOfUsers(filteredData)
        return filteredData.length
    }

    const handleStartDateChange = (event) => { setStartDate(event.target.value) }

    const handleEndDateChange = (event) => { setEndDate(event.target.value) }

    const countCountry = (listOfUsers, country) => {
        const newListOfUsers = listOfUsers.filter((userItem) => { return userItem.country === country })
        return newListOfUsers.length
    }

    const option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '20%',
            left: '6%',
            orient: 'vertical'
        },
        series: [
            {
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: false,
                        fontSize: 40,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: countCountry(listOfUsers, 'Poland'), name: 'Poland' },
                    { value: countCountry(listOfUsers, 'France'), name: 'France' },
                    { value: countCountry(listOfUsers, 'United Kingdom'), name: 'United Kingdom' },
                    { value: countCountry(listOfUsers, 'Germany'), name: 'Germany' },
                    { value: countCountry(listOfUsers, 'Hungary'), name: 'Hungary' },
                    { value: countCountry(listOfUsers, 'Austria'), name: 'Austria' }
                ],
                center: ['68%', '46%']
            }
        ]
    }

    const deleteUserItemHandle = (deleteUserItemId) => {
        const newListOfUsers = listOfUsers.filter((userItem) => { return userItem.id !== deleteUserItemId })
        setListOfUsers(newListOfUsers)
    }

    return (
        <>
            <DateFilter
            startDate={startDate}
            handleStartDateChange={handleStartDateChange}
            endDate={endDate}
            handleEndDateChange={handleEndDateChange}
            />

            <aside>
                <ReactEcharts option={option} />
            </aside>

            <main>
                <table>
                    <thead>
                        <TableHeader />
                    </thead>

                    <tbody>
                        {
                            listOfUsers.map((userItem) => {
                                return (
                                    <UserItem
                                    key={userItem.id}
                                    first_name={userItem.first_name}
                                    last_name={userItem.last_name}
                                    email={userItem.email}
                                    birthday={userItem.birthday}
                                    country={userItem.country}
                                    deleteUserItemHandle={() => deleteUserItemHandle(userItem.id)}
                                    />
                                )
                            })
                        }
                    </tbody>
                </table>
            </main>
        </>
    )
}

export default TableOfUsers
