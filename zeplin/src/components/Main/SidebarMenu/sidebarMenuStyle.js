import jss from "jss";
import preset from "jss-preset-default";
jss.setup(preset());
const sidebarMenu ={
    sidebarMenu:{
        marginLeft: '77px',
        marginTop: '79px',
    },
    sidebarItem:{
        padding: '20px 0',
    },
    subSidebarMenu:{
        marginLeft: '22px',
    },
    sideBarLinc:{
        paddingLeft: '13px',
        textDecoration: 'none',
        fontFamily: 'sans-serif',
        padding: '10px 0',
        borderLeft: '2px solid white',
        color: '#abaeae',
            '&:hover':{
                color: '#da1781',
                borderLeft:'2px solid  #da1781'
            }
    },
}


export const { classes } = jss.createStyleSheet(sidebarMenu).attach();
