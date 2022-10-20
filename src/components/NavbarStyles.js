const buildStyle = () => {
    return {
        navbar: {
            desktop: {
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
            }

        }
    }
}

export const useStyle = () => {
    const styles = buildStyle();
    return {
        navbar: {
            ...styles.navbar
        }
    }
}