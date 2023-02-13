import Navbar from "../components/Navbar"
import Drawer from "../components/utils/Drawer"
import AddressForm from "../components/form/address"
const AddressPage = () => {
    return (
        <>
            <Navbar />
            <Drawer />
            <main className="bg-gray-100  pb-20">
                <div className="mx-auto max-w-7xl">
                    <h1 className="text-center text-3xl py-10">Address </h1>
                    <AddressForm />
                </div>
            </main>
        </>
    )
}

export default AddressPage