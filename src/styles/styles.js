import styled from "styled-components"
import { IoMdClose, IoMdOpen } from "react-icons/io"
import { BiSearchAlt2 } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import { BsCartPlus, BsCartCheck } from "react-icons/bs"
import { TiShoppingCart } from "react-icons/ti"

export const Container = styled.main`
    width: 100%;
    margin: 0 auto;
    min-height: calc(
        100vh -
            (
                ${({ theme }) => theme.spacing.headerHeight} +
                    ${({ theme }) => theme.spacing.footerHeight}
            )
    );
    margin-top: ${({ theme }) => theme.spacing.headerHeight};
    background-color: ${({ theme }) => theme.colors.pageBackgroundColor};

    ${({ menuIsOpen }) => {
        return menuIsOpen ? "position: fixed" : ""
    }};

    @media (min-width: 700px) {
        width: 700px;
        margin: 0 auto;
        margin-top: ${({ theme }) => theme.spacing.headerHeight};
    }
`

export const LoadingContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    color: ${({ theme }) => theme.colors.secondaryFontColor};
`

// HEADER

export const Header = styled.header`
    width: 100vw;
    margin: 0 auto;
    height: ${({ theme }) => theme.spacing.headerHeight};

    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.colors.footerBackgroundColor};
    top: 0;
    z-index: 10;

    font-size: 12px;
    color: ${({ theme }) => theme.colors.headerFontColor};

    user-select: none;

    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);

    a:focus {
        outline: none;
        box-shadow: none;
        -webkit-tap-highlight-color: transparent;
    }

    img {
        height: 45px;
        margin-top: 10px;
        object-fit: cover;
    }

    svg {
        font-size: 22px;
        color: ${({ theme }) => theme.colors.headerFontColor};
    }

    div {
        display: flex;
        align-items: center;

        span {
            margin-left: 7px;
        }
    }
`

export const CartIcon = styled(TiShoppingCart)`
    cursor: pointer;
`

export const CartLabel = styled.p`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.cartLabelFontColor};
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.cartLabelBackgroundColor};
    text-align: center;
    border-radius: 50%;

    transform: translateY(-5px);

    padding: 0;
    margin: 0;
`

export const SearchIcon = styled(BiSearchAlt2)`
    cursor: pointer;
`

export const CloseIcon = styled(AiOutlineClose)`
    cursor: pointer;
`

export const MenuHeaderContainer = styled.div`
    cursor: pointer;
`

export const SearchContainer = styled.header`
    width: 100vw;
    max-width: ${({ theme }) => theme.spacing.maxBodyWidth};
    height: ${({ theme }) => theme.spacing.headerHeight};

    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #1a1a1a;
    z-index: 10;

    font-size: 12px;
    color: ${({ theme }) => theme.colors.headerFontColor};
    padding: 5px 20px;

    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);

    input {
        margin-left: 10px;
        width: 80%;
        border: none;
        border-width: 0px;
        outline: none;
        background: linear-gradient(gray, gray) center bottom 1px /
            calc(100% - 4px) 1px no-repeat;
        color: ${({ theme }) => theme.colors.headerFontColor};
        font-size: 16px;
    }

    svg {
        margin-left: 5px;
        font-size: 25px;
    }
`

export const NavMenu = styled.div`
    position: fixed;
    top: ${({ theme }) => theme.spacing.headerHeight};
    z-index: 10;
    left: 0;
    right: 0;
    /* width: 100vw; */
    /* max-width: ${({ theme }) => theme.spacing.maxBodyWidth}; */
    height: calc(100vh - ${({ theme }) => theme.spacing.headerHeight});

    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */

    background-color: ${({ theme }) => theme.colors.footerBackgroundColor};

    padding: 10px 20px;
    opacity: 0.99;

    p {
        font-size: 16px;
        color: white;
        font-weight: 300;
    }

    a {
        text-decoration: none;
    }
`

export const ProfileContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    /* padding: 30px 50px; */
    border-bottom: 1px solid gray;
    text-align: center;

    h1 {
        font-size: 16px;
        color: ${({ theme }) => theme.colors.menuLinkColor};
        font-weight: 400;
    }
`

export const AuthLinksContainer = styled(ProfileContainer)`
    justify-content: center;

    a {
        margin: 0 20px;
    }
`

export const Profile = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 45px;
    }

    span {
        margin-left: 20px;
        color: white;
        font-weight: 300;
    }
`

export const LogoutButton = styled.button`
    margin: 10px;
    padding: 5px 10px;
    background-color: ${({ theme }) =>
        theme.colors.logoutButtonBackgroundColor};
    color: ${({ theme }) => theme.colors.logoutButtonFontColor};

    border: none;
`

// FOOTER

export const Footer = styled.footer`
    min-height: 50px;
    max-height: ${({ theme }) => theme.spacing.footerHeight};
    color: ${({ theme }) => theme.colors.footerFontColor};
    background-color: ${({ theme }) => theme.colors.footerBackgroundColor};

    padding: 15px 20px;

    font-size: 14px;

    box-shadow: -2px -2px 3px rgba(0, 0, 0, 0.2);

    & img {
        width: 130px;
        margin: 0;
        padding: 0;
        /* transform: translateY(-75%); */
    }

    & a {
        color: ${({ theme }) => theme.colors.footerFontColor};
        text-decoration: none;
        text-align: center;
        font-weight: 600;

        &:visited {
            color: inherit;
        }
    }
`

export const FooterInfoContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
`

export const FooterInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FooterDisclaimer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    padding-top: 5px;
    border-top: 1px solid ${({ theme }) => theme.colors.footerBorderColor};
    & > p {
        font-size: 12px;
        margin: 5px 0 0 0;
    }
`

// MAIN PAGE

export const MainPage = styled.section`
    width: 90%;
    height: 100%;
    margin: 0 auto;
    padding: 15px 0 20px;
`

export const GameHighlight = styled.article`
    height: 240px;
    width: 100%;

    cursor: pointer;

    background-image: url(${(props) => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;

    background-color: white;

    color: white;

    & h5,
    & p {
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
    }
`

export const GameInfoContainer = styled.div`
    color: white;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    padding: 15px;
`

export const HighlightGameTitle = styled.h5`
    margin: 0;
    padding: 0;

    font-size: 16px;
    font-weight: 500;
`

export const GamePriceAndCartContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    margin-top: 10px;
`

export const GamePriceContainer = styled.div`
    display: flex;
    align-items: center;

    gap: 5px;
`

export const AddToCartButton = styled.button`
    padding: 7px 10px 7px 14px;

    cursor: pointer;

    background-image: ${({ theme }) => theme.colors.buttonBackgroundColor};
    border: none;
    border-radius: 5px;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);

    font-weight: 600;
`

export const AddToCartIcon = styled(BsCartPlus)`
    position: relative;
    transform: translate(-30%, 10%);
`

export const CheckoutIcon = styled(BsCartCheck)`
    position: relative;
    transform: translate(-30%, 10%);
`

export const GamesCarousel = styled.div`
    color: white;

    height: 200px;

    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);

    & div {
        height: 100%;
        background-size: cover;
        background-position: center center;
    }

    & button {
        z-index: 2 !important;
    }
`

export const CarouselInfo = styled.div`
    cursor: pointer;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 10px 5px;

    & div {
        display: flex;
        align-items: flex-end;
    }
`

export const CarouselGameTitle = styled(HighlightGameTitle)``

export const CarouselPrice = styled.p`
    font-weight: 600;
    margin: 5px;
`

export const BrowseGamesLink = styled.button`
    height: 100%;
    width: 100%;

    background-color: transparent;

    color: ${({ theme }) => theme.colors.mainFontColor};

    padding: 15px;

    border: none;
    border-top: 2px solid ${({ theme }) => theme.colors.inputBorderColor};
    border-bottom: 2px solid ${({ theme }) => theme.colors.inputBorderColor};

    a {
        font-weight: 700;
        font-size: 18px;
        display: block;

        text-decoration: none;

        &:visited {
            color: black;
        }
    }
`

export const OpenLinkIcon = styled(IoMdOpen)`
    position: relative;
    transform: translate(-30%, 15%);
`

// BROWSE GAMES PAGE

export const BrowseGamesPage = styled(MainPage)``

export const SearchBar = styled.div`
    position: relative;

    width: 100%;

    margin: 0 auto;
    padding: 5px 10px;

    background-color: ${({ theme }) => theme.colors.inputBackground};

    border: 2px solid ${({ theme }) => theme.colors.inputBorderColor};
    border-radius: 25px;
`

export const SearchBarInput = styled.input`
    font-family: ${({ theme }) => theme.colors.mainFont};
    font-size: 14px;

    margin-left: 5px;

    background-color: ${({ theme }) => theme.colors.inputBackground};

    border: none;

    &:focus {
        outline: none;
    }
`

export const MagnifyingGlassIcon = styled(BiSearchAlt2)`
    position: relative;
    transform: translateY(+20%);

    cursor: pointer;
`

export const CleanIcon = styled(IoMdClose)`
    position: absolute;
    top: 50%;
    right: 5%;
    transform: translateY(-50%);

    cursor: pointer;
`

export const Label = styled.h3`
    width: 100%;

    margin: 15px auto;
    padding: 0 0 15px 0;

    border-bottom: 1px solid ${({ theme }) => theme.colors.inputBorderColor};
`

export const GamesContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;

    width: 100%;
    margin: 20px auto 30px;
`

export const GameCard = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    cursor: pointer;

    width: 100%;
    height: 230px;
    background-color: ${({ theme }) => theme.colors.gameCardBackgroundColor};
    border-radius: 5px;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);

    & > div {
        display: flex;
        height: 55%;
        flex-direction: column;
        justify-content: space-between;
    }

    & img {
        height: 45%;
        width: 100%;
        object-fit: cover;
        border-radius: 5px 5px 0 0;
    }
`

export const GameTitle = styled.h5`
    margin: 0;
    padding: 10px 15px;

    font-size: 16px;
    font-weight: 500;
`

export const ValuesContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin: 15px;
    gap: 5px;

    font-weight: 600;
`

export const DiscountLabel = styled.p`
    box-sizing: content-box;
    background-color: ${({ theme }) => theme.colors.discountLabelBackground};
    padding: 5px;
    margin: 0;
    border-radius: 5px;

    color: ${({ theme }) => theme.colors.discountLabelFontColor};
`

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    font-weight: 500;

    p {
        padding: 0;
        margin: 0;
    }
`

export const OriginalPrice = styled.p`
    font-size: 12px;
    text-decoration: line-through;
`

export const DiscountPrice = styled(CarouselPrice)``

// GAME PAGE

export const GamePage = styled(MainPage)``

export const GameImagesCarousel = styled.section`
    width: 100%;

    div {
        height: 210px;
        background-size: cover;
        background-position: center center;
    }

    & button {
        z-index: 5 !important;
    }
`

export const TitleContainer = styled.div`
    h1 {
        padding: 5px 0 30px;
        margin: 0;
        font-size: 24px;
        color: #212121;
    }
`

export const BuyContainer = styled.div`
    position: relative;
    width: 100%;
    /* height: 180px; */
    background: #e9e9e9;
    padding: 15px 20px;
    box-shadow: 0 0 6px 0 rgb(0 0 0 / 25%);

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    span {
        font-size: 16px;
        color: gray;
        text-decoration: line-through;
    }

    h2 {
        position: relative;
        margin: 0;
        color: #404040;
        font-size: 28px;
    }

    button {
        margin-top: 25px;
        width: 100%;
        height: 50px;
        border: 1px solid #96bd27;
        border-radius: 5px;
        border-bottom-color: #69941b;
        border-left-color: #7fa721;
        border-right-color: #7fa721;
        color: #fff;
        background-image: linear-gradient(-180deg, #9fbf00, #80ab00 91%);
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 25%);
        font-weight: bold;

        cursor: pointer;

        svg {
            margin-right: 10px;
        }
    }
`

export const DiscountLabelBig = styled.div`
    position: absolute;
    top: 15px;
    left: 0;
    width: 35%;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;

    background: #86328a;
    border-radius: 0 5px 5px 0;
    font-size: 32px;
    font-weight: 600;
    color: #fff;
`

export const DescriptionContainer = styled.div`
    width: 100%;
    margin-top: 40px;
    border-bottom: 1px solid #bfbfbf;

    h3 {
        font-size: 16px;
        margin: 0;
        color: #212121;
        font-weight: 500;
    }

    p {
        margin-top: 7px;
        font-size: 14px;
        color: #545454;
        font-weight: 300;
        line-height: 17px;
    }
`

export const SimilarProductsContainer = styled.div`
    width: 100%;
    margin-top: 30px;

    h3 {
        font-size: 16px;
        margin: 0;
        color: #212121;
        font-weight: 500;
        padding-bottom: 15px;
        border-bottom: 1px solid #bfbfbf;
    }
`

// AUTH PAGES (SIGN-IN AND SIGN-UP)

export const AuthContainer = styled.main`
    position: relative;
    width: 100vw;
    height: 100vh;
    background: ${({ theme }) => theme.colors.authPageBackgroundColor};
    display: flex;
    flex-direction: column;
    justify-content: center;

    input {
        width: 100%;
        height: 45px;
        margin-top: 10px;
        padding: 8px;
        outline: none;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        background: #d4d4d4;
    }

    a {
        text-decoration: none;
        color: white;
        font-size: 14px;
    }
`

export const AuthHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        transform: translateY(-30%);
        width: 230px;
        cursor: pointer;
    }
`

export const AuthForm = styled.form`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: all 1s;
`

export const ErrorMessage = styled.p`
    width: 98%;
    text-align: center;
    color: ${({ theme }) => theme.colors.errorMessageFontColor};
    background-color: ${({ theme }) =>
        theme.colors.errorMessageBackgroundColor};
    border-radius: 10px;
    font-weight: 500;
    padding: 4px 5px;
    margin-bottom: 10px;
    box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.2);
`

export const SuccessMessage = styled(ErrorMessage)`
    color: ${({ theme }) => theme.colors.succesMessageFontColor};
    background-color: ${({ theme }) =>
        theme.colors.succesMessageBackgroundColor};
    box-shadow: none;
`

export const PasswordMatchingMessage = styled(ErrorMessage)`
    color: ${({ theme }) => theme.colors.passwordMatchingFontColor};
    background-color: ${({ theme }) =>
        theme.colors.succesMessageBackgroundColor};
    box-shadow: none;
`

export const SubmitButton = styled.button`
    width: 100%;

    border: none;
    border-radius: 5px;

    background: ${({ theme }) => theme.colors.authButtonBackgroundColor};

    color: #ffffff;
    font-weight: 300;
    font-size: 20px;

    margin-top: 15px;
    padding: 10px;
    margin-bottom: 35px;

    cursor: pointer;

    &[disabled] {
        background-color: ${({ theme }) =>
            theme.colors.authDisabledButtonBackgroundColor};
    }
`

export const BackToStoreButton = styled.button`
    position: absolute;
    top: 0;
    left: 0;

    margin: 10px;
    padding: 10px;

    background: ${({ theme }) => theme.colors.authButtonBackgroundColor};

    border: none;
    border-radius: 5px;

    a {
        display: block;
    }
`

// CHECKOUT pages

export const MainContainer = styled.main`
    width: 100vw;
    height: 100vh;
    padding: 50px 0px 0px;
    background: #d9d9d9;
`

export const OrderContainer = styled.section`
    width: 100%;
    padding-top: 20px;

    label {
        margin-left: 15px;
        font-weight: 600;
        font-size: 16px;
    }
`

export const GameContainer = styled.div`
    width: 100%;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: #e1e1e1;
    box-shadow: 0 1px 5px rgb(0 0 0 / 15%);

    :first-of-type {
        margin-top: 15px;
    }

    img {
        max-width: 100px;
        height: 60px;
        object-fit: cover;
    }

    h6 {
        margin: 0 20px 0 0;
        font-weight: 600;
        font-size: 14px;
    }

    h5 {
        margin: 0 5px;
        font-weight: 500;
        font-size: 12px;
    }

    div {
        display: flex;
        margin-right: 10px;
    }
`

export const PaymentContainer = styled.section`
    width: 100%;
    margin-top: 40px;
    padding: 10px 20px 20px;

    background: #e1e1e1;
    box-shadow: 0 1px 5px rgb(0 0 0 / 15%);

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    h5 {
        font-size: 12px;
        margin: 0 0 0 15px;
        font-weight: 600;
        color: gray;
    }
`

export const ConfirmPayment = styled.div`
    display: flex;
    align-items: center;
`

export const FinishPayment = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        font-size: 18px;
    }

    button {
        width: 100%;
        height: 50px;
        border: 1px solid #96bd27;
        border-radius: 5px;
        border-bottom-color: #69941b;
        border-left-color: #7fa721;
        border-right-color: #7fa721;
        color: #fff;
        background-image: linear-gradient(-180deg, #9fbf00, #80ab00 91%);
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 25%);
        font-weight: bold;

        &[disabled] {
            border: none;
            background-image: none;
            background-color: ${({ theme }) =>
                theme.colors.authDisabledButtonBackgroundColor};
        }
    }
`

export const CheckoutErrorMessage = styled(ErrorMessage)`
    width: 80%;
    margin: 0 auto;
    margin: 30px auto;
`

export const CheckoutSuccessMessage = styled(CheckoutErrorMessage)`
    background-color: ${({ theme }) => theme.colors.succesMessageFontColor};
    color: ${({ theme }) => theme.colors.errorMessageBackgroundColor};
`
