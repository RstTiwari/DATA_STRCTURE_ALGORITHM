import { useState, useTransition } from "react";
import { Row, Col, Button } from "antd";
import TabButton from "./Tab";
import AboutTab from "./About";
import PostsTab from "./Post";
import ContactTab from "./Contact";
const Index = () => {
    const [tab, setTab] = useState("about");
    const [isPending, setTransition] = useTransition();
    const selectTab = (value) => {
        setTransition(setTab(value));
    };
    return (
        <Row justify={"center"}>
            <TabButton
                isActive={tab === "about"}
                onClick={() => selectTab("about")}
            >
                About
            </TabButton>
            <TabButton
                isActive={tab === "posts"}
                onClick={() => selectTab("posts")}
            >
                Posts (slow)
            </TabButton>
            <TabButton
                isActive={tab === "contact"}
                onClick={() => selectTab("contact")}
            >
                Contact
            </TabButton>
            <hr />
            {tab === "about" && <AboutTab />}
            {tab === "posts" && <PostsTab />}
            {tab === "contact" && <ContactTab />}
        </Row>
    );
};

export default Index;
