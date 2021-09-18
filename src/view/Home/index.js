import React from "react";
import "./index.scss";
import ds from "./../../assets/images/ds1.jfif";
import ds1 from "./../../assets/images/DS_features.jpg";
import ds2 from "./../../assets/images/dstypes.jfif";
const index = () => {
  return (
    <>
      <div className="bg-sky">
        <div className="container text-white text-center">
          <div className="row justify-content-center align-items-center py-5">
            <h1 classsName="py-4">What is Down syndrome?</h1>
            <div className="col-md-8 col-12">
              <h3 className="text-start lh-base ">
                Down syndrome (sometimes called Down’s syndrome) is a condition
                in which a child is born with an extra copy of their 21st
                chromosome — hence its other name, trisomy 21. This causes
                physical and mental developmental delays and disabilities. Many
                of the disabilities are lifelong, and they can also shorten life
                expectancy. However, people with Down syndrome can live healthy
                and fulfilling lives. Recent medical advances, as well as
                cultural and institutional support for people with Down syndrome
                and their families, provides many opportunities to help overcome
                the challenges of this condition.
              </h3>
            </div>
            <div className="col-md-4 col-12">
              <img src={ds} className="image-fluid" alt />
            </div>
          </div>
        </div>
      </div>
      <div className="container text-primary py-5">
        <h1 className="text-center py-4">What causes Down syndrome?</h1>
        <div className="row justify-content-center align-items-center ">
          <div className="col-md-5 col-12 text-end">
            <img src={ds1} />
          </div>
          <div className="col-md-6 col-12">
            <h4 className="lh-base">
              In all cases of reproduction, both parents pass their genes on to
              their children. These genes are carried in chromosomes. When the
              baby’s cells develop, each cell is supposed to receive 23 pairs of
              chromosomes, for 46 chromosomes total. Half of the chromosomes are
              from the mother, and half are from the father. In children with
              Down syndrome, one of the chromosomes doesn’t separate properly.
              The baby ends up with three copies, or an extra partial copy, of
              chromosome 21, instead of two. This extra chromosome causes
              problems as the brain and physical features develop.
            </h4>
          </div>
        </div>
      </div>
      <div className="bg-sky">
        <div className="container text-white">
          <div className="row align-items-center justify-content-center py-5">
            <h1 className="text-center py-3">Types of Down syndrome</h1>
            <div className="col-md-6 col-12">
              <h4 className="text-start">Trisomy 21</h4>
              <h5 className="text-start lh-base">
                Trisomy 21 means there’s an extra copy of chromosome 21 in every
                cell. This is the most common form of Down syndrome.
              </h5>
              <h4 className="text-start">Mosaicism</h4>
              <h5 className="text-start lh-base">
                Mosaicism occurs when a child is born with an extra chromosome
                in some but not all of their cells. People with mosaic Down
                syndrome tend to have fewer symptoms than those with trisomy 21.
              </h5>
              <h4 className="text-start">Translocation</h4>
              <h5 className="text-start mb-0 lh-base">
                Translocation In this type of Down syndrome, children have only
                an extra part of chromosome 21. There are 46 total chromosomes.
                However, one of them has an extra piece of chromosome 21
                attached.
              </h5>
            </div>
            <div className="col-md-6 col-12 text-end">
              <img src={ds2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
