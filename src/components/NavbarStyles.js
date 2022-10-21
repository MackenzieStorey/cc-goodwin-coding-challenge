const buildStyle = () => {
    return {
        navbar: {
            alignItems: "center",
            paddingLeft: "18px",
            paddingRight: "18px",
            paddingBottom: "10px",
            paddingTop: "10px",
            maxWidth: "1280px",
            borderBottomLeftRadius: "0.375rem",
            borderBottomRightRadius: "0.375rem",
            borderWidth: "0px 1px 1px 1px",
            borderColor: "#5924ce",
            gap: "5px",
            background: "#E0DFD5",
            width: "100%"
        },
        mainContainer: {
            minHeight: "100vh",
            minWidth: "100vw",
            background: "#E8E9EB"
        },
        containerBackground: {
            background: "#E0DFD5"
        },
        logoMain: {
            paddingLeft: "10px",
            paddingRight: "0.5rem"
        },
        menuButton: {
            fontSize: "20px",
            color: "#5924ce"
        }
    }
}

export const useStyle = () => {
    const styles = buildStyle();
    return {
        navbar: {
            ...styles.navbar
        },
        mainContainer: {
            ...styles.mainContainer
        },
        containerBackground: {
            ...styles.containerBackground
        },
        logoMain: {
            ...styles.logoMain
        },
        menuButton: {
            ...styles.menuButton
        }
    }
}