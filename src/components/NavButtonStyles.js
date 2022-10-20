const buildStyle = () => {
    return {
        linkText: {
            fontColor: "#3f66cd",
            fontSize: "18px"
        },
        linkButton: {
            fontColor: "#3f66cd",
            fontSize: "18px",
            borderColor: "#5924ce",
            '&:hover': {
                color: "#5924ce",
                background: "#f0efe4"
            },
            '&:focus': {
                color: "#5924ce",
                background: "#f0efe4"
            }
        },
        menuButton: {
            fontSize: "18px",
            fontColor: "#333333",
            '&:hover': {
                color: "#696969",
                background: "#f0efe4"
            }
        },
        menuList: {
            background: "#E0DFD5" ,
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

export const useStyle = () => {
    const styles = buildStyle();
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