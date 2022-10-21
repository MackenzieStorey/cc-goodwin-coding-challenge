const buildStyle = () => {
    return {
        navbar: {
            alignItems: "center",
            paddingLeft: "18px",
            paddingRight: "18px",
            paddingBottom: "10px",
            paddingTop: "10px",
            borderBottomLeftRadius: "0.375rem",
            borderBottomRightRadius: "0.375rem",
            borderWidth: "0px 1px 1px 1px",
            borderColor: "#5924ce",
            gap: "1px",
            background: "#E0DFD5",
            width: "100%"
        },
        mainContainer: {
            minHeight: "100vh",
            minWidth: "100vw",
            background: "#E8E9EB"
        },
        contentContainer: {
            paddingLeft: "18px",
            paddingRight: "18px",
            maxWidth: "1280px",
            width: "100%"
        },
        containerBackground: {
            background: "#E0DFD5"
        },
        menuButton: {
            fontSize: "25px",
            color: "#5924ce"
        },
        logoMain: {
            maxWidth: "256px",
            minWidth: "128px"
        },
        closeButton: {
            fontSize: "15px",
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
        contentContainer: {
            ...styles.contentContainer
        },
        logoMain: {
            ...styles.logoMain
        },
        menuButton: {
            ...styles.menuButton
        },
        closeButton: {
            ...styles.closeButton
        }
    }
}