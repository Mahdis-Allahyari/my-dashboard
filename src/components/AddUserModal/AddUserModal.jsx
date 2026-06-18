import { Button, Form, Input, Modal } from "antd"

function AddUserModal({ isOpen, onClose, onAddUser }) {
    const [form] = Form.useForm()

    function handleSubmit() {
        form
            .validateFields()
            .then(values => {
                onAddUser({
                    id: Date.now(),
                    name: values.name,
                    email: values.email,
                    phone: values.phone,
                    website: '',
                    company: { name: values.company }
                })
        form.resetFields()
        onClose()
    })
    .catch(() => {
            console.log('Form has errors')
        })
    }
    return (
        <Modal title="Add New User"
            open={isOpen}
            onCancel={onClose}
            footer={null}>
            <Form
                form={form}
                layout="vertical"
                className="mt-4"
            >
                <Form.Item
                    label="Full Name"
                    name="name"
                    rules={[{ required: true, message: 'Please enter a name' }]}
                >
                    <Input placeholder="Ali Hassan" />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please enter an email' }, { type: 'email', message: 'Please enter a valid email' }]}

                >
                    <Input placeholder="ali@example.com" />
                </Form.Item>
                <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[{required:true, message:'Please enter a phone number' }]}
                >
                    <Input placeholder="+98 912345679" />

                </Form.Item>
                <Form.Item
                    label="Company"
                    name="company"
                    rules={[{ required:true, message:'Please enter a company name' }]}

                >
                    <Input placeholder="company name" />

                </Form.Item>
                <div className=" flex justify-end gap-3 mt-2">
                    <Button onClick={onClose}>
                        Cancle
                    </Button>
                    <Button type="primary" onClick={handleSubmit}>
                        Add User
                    </Button>

                </div>
            </Form>
        </Modal>
    )
}

export default AddUserModal