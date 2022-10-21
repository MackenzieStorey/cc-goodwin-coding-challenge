const buildStyle = () => {
    return {
        linkText: {
            color: "#3f66cd",
            fontSize: "18px"
        },
        linkButton: {
            color: "#3f66cd",
            fontSize: "18px",
            borderColor: "#5924ce",
            '&:hover': {
                color: "#5924ce",
                background: "#f0efe4",
                textDecoration: "underline",
                textDecorationColor: "#5924ce",
            },
            '&:focus': {
                color: "#5924ce",
                background: "#f0efe4",
                textDecoration: "underline",
                textDecorationColor: "#5924ce",
            }
        },
        menuButton: {
            fontSize: "18px",
            color: "#333333",
            '&:hover': {
                color: "#696969",
                background: "#f0efe4"
            }
        },
        menuList: {
            background: "#E0DFD5",
            borderWidth: "0 1px 1px 1px",
            borderColor: "#5924ce",
            borderTopRightRadius: "0",
            borderTopLeftRadius: "0",
            borderBottomLeftRadius: "0.375rem",
            borderBottomRightRadius: "0.375rem",
            marginTop: "1.9px"
        }
    }
}

export const useStyle = (isMobile) => {
    const styles = buildStyle();
    if (isMobile) {
        return {
            linkText: {
                ...styles.linkText,
                fontSize: "16px",
                textDecoration: "underline",
                textDecorationColor: "#5924ce",
            },
            linkButton: {
                ...styles.linkButton,
                fontSize: "16px",
                textDecoration: "underline",
                textDecorationColor: "#5924ce",
            },
            menuButton: {
                ...styles.menuButton,
                fontSize: "16px",
                paddingLeft: "1.75rem"
            },
            menuList: {
                ...styles.menuList,
                marginRight: "2rem",
                marginTop: "-0.5rem",
            }
        }
    }
    return {
        linkText: {
            ...styles.linkText
        },
        linkButton: {
            ...styles.linkButton
        },
        menuButton: {
            ...styles.menuButton
        },
        menuList: {
            ...styles.menuList
        }
    }
}