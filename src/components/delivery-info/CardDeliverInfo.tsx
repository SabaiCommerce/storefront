interface Props {
    title: string;
    paragraph: string;
}
const CardDeliverInfo = ({ title, paragraph }: Props) => {
    return (
        <div className="flex flex-col text-center">
            <h3 className="font-bold text-[16px]">{title}</h3>
            <p className="text-[14px] text-color-raisin-black">{paragraph}</p>
        </div>
    );
};

export default CardDeliverInfo;
